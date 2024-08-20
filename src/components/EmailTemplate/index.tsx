interface EmailTemplateProps {
  email: string;
  body: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
  body,
}) => (
  <div>
    <h1>{email} is trying to reach out from portfolio land.</h1>
    <p>{body}</p>
  </div>
);
