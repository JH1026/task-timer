import { css } from "@emotion/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
  link?: string;
}

const Title = ({
  children,
  link
}: Props) => {
  const navigate = useNavigate();

  if (link) {
    return (
      <h2 css={linkTitle} onClick={() => navigate(link)}>
        {children}
      </h2>
    );    
  }

  return (
    <h2>
      {children}
    </h2>
  );
}

export default Title;

const linkTitle = css`
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`
