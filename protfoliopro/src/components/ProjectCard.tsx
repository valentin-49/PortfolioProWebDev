import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  imageSrc?: string;      // nouvelle prop optionnelle pour l’image
  imageAlt?: string;      // alt de l’image (optionnel)
  className?: string;     // accepter className optionnelle
};

export default function ProjectCard({
  title,
  description,
  link,
  imageSrc,
  imageAlt = '',
  className = '',
}: ProjectCardProps) {
  return (
    <a
      href={link}
      className={`block p-6 rounded-xl border hover:border-pink-500 ${className} hover:scale-110 duration-300 ease-in-out`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </a>
  );
}
