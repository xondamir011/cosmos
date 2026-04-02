import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  position: absolute;
  top: 20px; /* tepada biroz bo‘sh joy */
  left: 20px; /* o‘ng tomonda */
  width: 300px;
  background: rgba(0, 0, 0, 0.9);
  padding: 20px;
  border-radius: 12px;
  color: white;
  z-index: 10;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0,0,0,0.7);

  @media (max-width: 768px) {
   top: 10px;
   left: 50%;
   transform: translateX(-50%);
   width: 90%;
   padding: 15px;
}  

@media (max-width: 480px) {
  top:5px;
  left:50%;
  transform: translateX(-50%);
  width: 95%;
  padding: 12px;

}
 `;

const Title = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;

const Box = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: bold;
  color: #00ffff;
`;

const Description = styled.p`
  font-size: 14px;
  opacity: 0.8;
  margin-top: 10px;
`;


const Card = ({ planet }) => {
  if (!planet) return null;

  return (
    <Panel>
      <Title>🪐 {planet.name}</Title>

      <Box>
        <Label>Radius:</Label> {planet.radius}
      </Box>

      <Box>
        <Label>Distance:</Label> {planet.distance}
      </Box>

      <Box>
        <Label>Speed:</Label> {planet.speed}
      </Box>

      <Description>
        {planet.description || "Bu sayyora haqida ma’lumot mavjud emas."}
      </Description>
    </Panel>
  );
};

export default Card;