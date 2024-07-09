import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.main`
  position: relative;
  width: 90%;
  height: 50%;
  margin: 5% auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  border-radius: 20px;

  ${Media.PhoneLarge} {
    width: 95%;
  }

  ${Media.PhoneSmall} {
    width: 100%;
    margin: 10% auto;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;

    .Button {
      border: none;
      background-color: var(--purple);
      cursor: pointer;
      padding: 1rem;
      font-size: 1rem;
      color: var(--light);
      text-align: center;
      font-family: poppins;
      font-weight: 800;
      text-transform: uppercase;
      border-radius: 10.94px;
    }

    input {
      padding: 0.5rem 1rem;
      border: 1px solid var(--light);
      border-radius: 15px;
      width: 50%;
      font-size: 1.5rem;
      color: var(--light);
      ${Media.PhoneLarge} {
        font-size: 1rem;
        width: 90%;
      }
    }

    input::placeholder {
      font-size: 1.3rem;
      text-align: left;
      color: var(--light);
      font-family: Poppins;
      font-weight: bold;

      ${Media.PhoneLarge} {
        font-size: 1rem;
      }
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 2px 1px var(--purple);
    }
  }

  h3 {
    color: var(--light);
    text-align: center;
    font-family: poppins;
    font-weight: bold;
    text-transform: uppercase;
    white-space: pre;
    ${Media.Laptop} {
      white-space: normal;
    }
  }
`;
