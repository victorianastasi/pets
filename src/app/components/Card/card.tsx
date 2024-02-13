import React from "react";
import "./card.scss";

interface CardProps {
  text?: string;
  url?: string;
  classname?: string;
  icon?: JSX.Element;
  iconColor?: string;
  color?: string;
}

export const Card: React.FC<CardProps> = (
  props: React.PropsWithChildren<CardProps>
) => {
  const {
    text = "Titulo",
    classname,
    icon,
    color = "#3c4c61",
    url = "#",
    iconColor = "#587291"
  } = props;

  function darkenColor(hex: string, factor: number) {
    factor = Math.min(1, Math.max(0, factor));

    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    r = Math.round(r * (1 - factor));
    g = Math.round(g * (1 - factor));
    b = Math.round(b * (1 - factor));

    const result = `#${((r << 16) | (g << 8) | b)
      .toString(16)
      .padStart(6, "0")}`;

    return result;
  }

  return (
    <div className={`card ${classname}`}>
      <a href={url} className="card-link" target="_blank">
        {icon &&
          React.cloneElement(icon, {
            className: `card-link__icon`,
            style: { color: iconColor },
          })}
        <span
          className="card-link__text"
          style={{ backgroundColor: darkenColor(color, 0.2) }}
        >
          {text}
        </span>
      </a>
    </div>
  );
};
