import React from 'react';
import { Typography, Stack } from '@mui/material';


// Title Component
interface TitleProps {
  company: string;
}

export const Title: React.FC<TitleProps> = ({ company }) => (
    <Typography sx={{ p: 1, color: "grey" }}>{company}</Typography>
);

// Position Component
interface PositionProps {
  position: string;
}

export const Position: React.FC<PositionProps> = ({ position }) => (
    <Typography sx={{ p: 1, color: "grey" }}>{position}</Typography>
);

// Impact Component
interface ImpactProps {
  text: string;
  highlight?: boolean;
}

export const Impact: React.FC<ImpactProps> = ({ text }) => {
  return <Typography>• {text}</Typography>;
};

// Impacts Container Component
interface ImpactsProps {
  items: string[];
}

export const Impacts: React.FC<ImpactsProps> = ({ items }) => (
  <Stack spacing={2} sx={{ p: 2 }}>
    {items.map((impact, index) => (
      <Impact 
        key={index}
        text={impact}
      />
    ))}
  </Stack>
);

// Example usage
const Work: React.FC = () => {
  const impacts = [
    "Led the design, infrastructure setup, and backend development for new product launches",
    "Guided the service team by articulating user value and identifying minimum requirements, minimizing time to delivery",
    "Continuously identified and resolved development bottlenecks by automating CI/CD pipelines and leveraging code generation to accelerate delivery",
    "Collaborated on a separate project adhering to OIDC specifications, implementing authentication flows as a client and enabling access token validation on the resource server"
  ];

  return (
    <Stack spacing={2}>
      <Title company="Kaminashi Inc." />
      <Position position="Fullstack Engineer - Go/TypeScript" />
      <Impacts items={impacts}  />
    </Stack>
  );
};

export default Work;