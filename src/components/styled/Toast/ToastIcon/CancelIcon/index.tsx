interface IconProps {
    width?: string;
    height?: string;
    color?: string;
    onClick?: () => void;
    active?: boolean;
  }

export const CancelIcon = (props: IconProps) => {
    return (
      <svg
        width={props.width ? props.width : "24"}
        height={props.height ? props.height : "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={props.onClick}
        cursor={"pointer"}
      >
        <g id="SVG=Cancel">
          <path
            id="Vector"
            d="M18.3 5.71C17.91 5.32 17.28 5.32 16.89 5.71L12 10.59L7.10997 5.7C6.71997 5.31 6.08997 5.31 5.69997 5.7C5.30997 6.09 5.30997 6.72 5.69997 7.11L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.11C18.68 6.73 18.68 6.09 18.3 5.71Z"
            fill={props.color ? props.color : "black"}
          />
        </g>
      </svg>
    );
}