import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget; // Store reference before await
    const formData = new FormData(form);

    formData.append("access_key", "5022ffd2-19d4-4f63-9263-be4e49b1fedd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Děkujeme za vaši zprávu! Brzy se vám ozveme.");
      form.reset();
    } else {
      setResult(
        "Omlouváme se, došlo k chybě. Zkuste to prosím znovu. Nebo nám napište na email DavidPlza@seznam.cz"
      );
    }
    setIsSubmitting(false);
    setShowMessage(true);
  };

  return (
    <form
      id="contact-form"
      className="space-y-6"
      data-aos="fade-up"
      onSubmit={onSubmit}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-light-gray-900 mb-2"
        >
          Jméno a příjmení <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-input w-full"
          placeholder="Jan Novák"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-light-gray-900 mb-2"
        >
          E-mail <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input w-full"
          placeholder="jan.novak@email.cz"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-light-gray-900 mb-2"
        >
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input w-full"
          placeholder="+420 123 456 789"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-light-gray-900 mb-2"
        >
          Zpráva <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="form-textarea w-full"
          placeholder="Popište prosím váš projekt nebo dotaz..."
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn bg-light-gray-900 text-white hover:bg-light-gray-800 w-full sm:w-auto disabled:opacity-50"
        >
          {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
        </button>
      </div>

      {showMessage && (
        <div className="mt-4 p-4 rounded-md bg-green-50 text-green-800 border border-green-200">
          {result}
        </div>
      )}
    </form>
  );
}
