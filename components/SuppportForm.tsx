"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "@/app/sensitive-info/schema";

// Bolt Optimization: Pre-instantiate Zod resolver and defaultValues at module scope
// to avoid recreating the resolver closure and default values object on every render pass,
// maintaining stable references for react-hook-form.
const resolver = zodResolver(formSchema);
const defaultValues = {
  supportMessage:
    "I ordered a hat from your store and would like to request a refund. My credit card number is 4111111111111111 ",
};

export function SupportForm() {
  // Used to navigate to the welcome page after a successful form submission.
  const router = useRouter();

  // Set up the form with the Zod schema and a resolver.
  // Bolt Optimization: Destructure useForm state directly to prevent property
  // accesses through object references and disable the submit button during submission
  // to avoid duplicate concurrent in-flight requests.
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver,
    defaultValues,
  });

  // Define a submit handler called when the form is submitted. It sends the
  // form data to an API endpoint and redirects to the welcome page on success.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // values is guaranteed to be of the correct type by the Zod schema.
    const result = await fetch("/sensitive-info/test", {
      body: JSON.stringify(values),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the request was successful and redirect to the welcome page if
    // so. Otherwise, set a root error message.
    if (result.ok) {
      router.push("/sensitive-info/submitted");
    } else {
      const statusText = result?.statusText || "Service error";
      const error = await result.json();
      const errorMessage = error?.message || statusText;

      setError("root.serverError", {
        message: `We couldn't submit the form: ${errorMessage}`,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-field">
        <label className="form-label">
          Message
          <textarea
            placeholder="Please enter your message."
            className="form-textarea"
            {...register("supportMessage")}
          />
        </label>
        {errors.supportMessage && (
          <div className="form-error">{errors.supportMessage.message}</div>
        )}
        {errors.root?.serverError && (
          <div className="form-error">{errors.root.serverError.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="button-primary form-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
