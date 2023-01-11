// Presentational Component
import '.styles.css'

type Props = {
  label: string
  text: string
  disabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ label, text, disabled, onClick }: Props) => {
  return (
    <div className="button-container">
      <span>{label}</span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}
