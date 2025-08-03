import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type CardImageProps = {
  imgSrc: string;
  className?: string;
  alt?: string;
};

interface CardComponent extends React.FC<CardProps> {
  Header: React.FC<CardProps>;
  Body: React.FC<CardProps>;
  Footer: React.FC<CardProps>;
  Title: React.FC<CardProps>;
  Description: React.FC<CardProps>;
  Image: React.FC<CardImageProps>;
}

const Card: CardComponent = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-white border border-gray-200 rounded-2xl p-4`}
    >
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};

const CardBody: React.FC<CardProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const CardFooter: React.FC<CardProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

const CardTitle: React.FC<CardProps> = ({ children, className }) => {
  return <h3 className={`${className} font-bold text-sm`}>{children}</h3>;
};

const CardDescription: React.FC<CardProps> = ({ children, className }) => {
  return <p className={`${className} text-sm text-gray-400`}>{children}</p>;
};

const CardImage: React.FC<CardImageProps> = ({ className, imgSrc, alt }) => {
  return (
    <div className={` ${className}`}>
      <img src={imgSrc} alt={alt} className="w-25 h-25 rounded-[50%]" />
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Image = CardImage;

export default Card;
