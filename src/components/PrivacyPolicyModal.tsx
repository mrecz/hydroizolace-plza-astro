interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-light-gray-900">
            Zásady ochrany osobních údajů
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Zavřít"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-5 overflow-y-auto max-h-[60vh] text-sm text-light-gray-700 space-y-4">
          <p>
            David Plza, IČO 07706928, se sídlem Češkova 1358, 530 02 Pardubice
            jako správce osobních údajů, Vás jako uživatele webových stránek{" "}
            <a
              href="https://hydroizolaceplza.cz"
              className="text-light-gray-900 underline hover:text-light-gray-700"
            >
              https://hydroizolaceplza.cz
            </a>{" "}
            informuje o níže popsaném shromažďování osobních údajů a zásadách
            ochrany soukromí ve smyslu nařízení Evropského parlamentu a Rady
            (EU) č. 2016/679 o ochraně fyzických osob v souvislosti se
            zpracováním osobních údajů a o volném pohybu těchto údajů a o
            zrušení směrnice 95/46/ES (obecné nařízení o ochraně osobních
            údajů), dále jen „Nařízení".
          </p>

          <div>
            <h4 className="font-semibold text-light-gray-900 mb-2">
              1. Zpracování osobních údajů dětí
            </h4>
            <p>
              Naše webové stránky nejsou určeny pro děti mladší 16 let. Osobní
              údaje dětí mladších 16 let nezpracováváme.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-light-gray-900 mb-2">
              2. Rozsah zpracování osobních údajů
            </h4>
            <p>
              Když nás kontaktujete prostřednictvím webových stránek, můžete být
              požádáni o vyplnění určitých údajů o sobě nebo Vaší společnosti.
              Těmito údaji mohou být zejména:
            </p>
            <ul className="list-disc list-inside mt-2 ml-2 space-y-1">
              <li>Vaše jméno a příjmení,</li>
              <li>obchodní firma,</li>
              <li>telefonní číslo nebo</li>
              <li>e-mailová adresa.</li>
            </ul>
            <p className="mt-2">
              Na našich webových stránkách Vás nesledujeme, takže se k nám
              dostanou jenom ty Vaše osobní údaje, které nám výslovně sdělíte.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-light-gray-900 mb-2">
              3. Účel zpracování
            </h4>
            <p>
              Údaje, které nám poskytujete, používáme k tomu, abychom Vás
              kontaktovali zpět a poskytli Vám informace, o které jste nás
              požádali, nebo pro účely plnění smlouvy, tj. Hydroizolace plochých
              střech, renovace balkónů a teras. Veškeré osobní údaje jsou
              zpracovány zákonným a transparentním způsobem a jsou vyžadovány
              pouze přiměřené, relevantní a nezbytné údaje ve vztahu k účelu
              zpracování.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-light-gray-900 mb-2">
              5. Doba zpracování osobních údajů
            </h4>
            <p>
              Vaše osobní údaje budeme zpracovávat po dobu, po kterou Vám budeme
              poskytovat naše služby či plnit vzájemnou smlouvu.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-light-gray-900 mb-2">
              6. Vaše práva plynoucí ze zpracování osobních údajů
            </h4>
            <p>
              S výše uvedeným zpracováním udělujete svůj výslovný souhlas.
              Poskytnutí osobních údajů je dobrovolné. Souhlas lze vzít kdykoliv
              zpět, a to například zasláním emailu na{" "}
              <a
                href="mailto:DavidPlza@seznam.cz"
                className="text-light-gray-900 underline hover:text-light-gray-700"
              >
                DavidPlza@seznam.cz
              </a>
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-light-gray-900 mb-2">
              7. Kontakt
            </h4>
            <p>
              V případě, že budete potřebovat kteroukoliv část textu vysvětlit,
              poradit anebo projednat další zpracování Vašich osobních údajů,
              můžete se na nás kdykoliv obrátit na e-mailové adrese{" "}
              <a
                href="mailto:DavidPlza@seznam.cz"
                className="text-light-gray-900 underline hover:text-light-gray-700"
              >
                DavidPlza@seznam.cz
              </a>
            </p>
            <p className="mt-2 text-xs text-gray-500">
              Tyto Zásady ochrany osobních údajů jsou účinné od 19.12.2025.
            </p>
          </div>
        </div>
        <div className="p-5 border-t border-gray-200 bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="btn bg-light-gray-900 text-white hover:bg-light-gray-800 w-full"
          >
            Rozumím
          </button>
        </div>
      </div>
    </div>
  );
}
