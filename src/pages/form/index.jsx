import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./style.js";

export default function Modal() {
  const modalRef = useRef(null);
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [redirectMessage, setRedirectMessage] = useState("");

  const getObservacao = () => {
    if (location.pathname === "/pagina-um") {
      return "Lead da página 1";
    } else {
      return "Lead de origem desconhecida";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowSubmitButton(false);
    setRedirectMessage("Redirecionando você para o contato...");

    const formData = new FormData(event.target);
    const data = {
      nome: formData.get("Nome"),
      telefone: formData.get("Telefone"),
      origem: "Google",
      observacoes: getObservacao(),
    };

    try {
      const response = await fetch("https://api.pipefy.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `INSIRA SEU TOKEN AQUI`,
        },
        body: JSON.stringify({
          query: `
            mutation {
              createCard(input: {
                pipe_id: INSIRA SEU PIPEID AQUI,
                fields_attributes: [
                  { field_id: "nome", field_value: "${data.nome}" },
                  { field_id: "telefone", field_value: "${data.telefone}" },
                  { field_id: "origem", field_value: "${data.origem}" },
                  { field_id: "observa_es_2", field_value: "${data.observacoes}" }
                ]
              }) {
                card {
                  id
                }
              }
            }
          `,
        }),
      });

      const result = await response.json();
      console.log(result);

      let whatsappLink;
      if (location.pathname === "/pagina-um") {
        whatsappLink = `INSIRA SEU LINK DE CONTATO AQUI`;
      } else {
        whatsappLink = `INSIRA SEU LINK DE CONTATO AQUI`;
      }
      window.location.href = whatsappLink;
    } catch (error) {
      console.error("Erro ao enviar os dados para o Pipefy:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Styled.Container className="teste">
      {redirectMessage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {redirectMessage}
        </div>
      )}
      <form
        ref={modalRef}
        onSubmit={handleSubmit}
        className={`col formulario conversionForm`}
      >
        <h3>
          Preencha o formulário <br />e fale com um consultor pelo Whatsapp!
        </h3>
        <input
          type="text"
          name="Nome"
          required
          placeholder="Nome"
          pattern="^[A-Za-zÀ-ú\s]+$"
          className="Nome"
        />
        <input
          type="text"
          name="Telefone"
          required
          placeholder="Telefone"
          pattern="^\+?(\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$"
          className="Telefone"
        />
        {showSubmitButton && (
          <input
            className="Button"
            type="submit"
            value="Fale com um consultor"
            disabled={isSubmitting}
          />
        )}
      </form>
    </Styled.Container>
  );
}
