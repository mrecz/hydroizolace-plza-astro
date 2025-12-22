import { useState, type FormEvent } from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [result, setResult] = useState("");
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget; // Store reference before await
    const formData = new FormData(form);

    formData.append("access_key", "74b76797-9d87-4ceb-b1ab-984b03ffd302");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error("Invalid JSON response from server");
      }

      if (data.success) {
        setResult("Děkujeme za vaši zprávu! Brzy se vám ozveme.");
        form.reset();
        setConsentChecked(false);
      } else {
        setResult(
          "Omlouváme se, došlo k chybě. Zkuste to prosím znovu. Nebo nám napište na email DavidPlza@seznam.cz"
        );
      }
      setShowMessage(true);
    } catch (error) {
      setResult(
        "Omlouváme se, došlo k chybě. Zkuste to prosím znovu. Nebo nám napište na email DavidPlza@seznam.cz"
      );
      setShowMessage(true);
    } finally {
      setIsSubmitting(false);
    }
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

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={consentChecked}
          onChange={(e) => setConsentChecked(e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-light-gray-900 focus:ring-light-gray-900 cursor-pointer"
        />
        <label htmlFor="consent" className="text-sm text-light-gray-700">
          Odesláním dotazu souhlasím se{" "}
          <button
            type="button"
            onClick={() => setShowPrivacyModal(true)}
            className="text-light-gray-900 underline hover:text-light-gray-700 font-medium cursor-pointer"
          >
            zpracováním osobních údajů
          </button>
          . <span className="text-red-500">*</span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting || !consentChecked}
          className="btn bg-light-gray-900 text-white hover:bg-light-gray-800 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Odesílám..." : "Odeslat zprávu"}
        </button>
      </div>

      <PrivacyPolicyModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />

      {showMessage && (
        <div
          className={`mt-4 p-4 rounded-md border ${
            result.includes("Děkujeme")
              ? "bg-green-50 text-green-800 border-green-200"
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          {result}
        </div>
      )}
    </form>
  );
}
