import { S } from 'components/Button/styles';
import { ButtonSize, ButtonType, ButtonVariant } from 'components/Button/types';
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  prefixIconURL?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  type?: ButtonType;
  loading?: boolean;
  disabled?: boolean;
}

function Button({
  variant = 'primary',
  size = 'small',
  type = 'submit',
  loading = false,
  disabled = false,
  children,
  prefixIconURL,
  ...props
}: ButtonProps) {
  if (loading) disabled = true;

  return (
    <S.Button variant={variant} size={size} type={type} disabled={disabled} {...props}>
      <S.Container>
        {loading && <LoadingSpinner />}
        {!loading && prefixIconURL && <S.PrefixIcon src={prefixIconURL} />}
        <p style={{ margin: '0' }}>{children}</p>
      </S.Container>
    </S.Button>
  );
}

export default Button;
