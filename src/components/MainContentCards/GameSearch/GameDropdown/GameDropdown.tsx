import React, { useState } from "react";
import "./GameDropdown.css";
import { GiBroadsword } from "react-icons/gi";
import { TiArrowSortedDown } from "react-icons/ti";
export const GameDropdown: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string>("Select a game");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const games: string[] = [
    "League of Legends",
    "World of Warcraft",
    "Diablo",
    "Albion",
  ];

  const handleSelectGame = (game: string) => {
    setSelectedGame(game);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown__select" onClick={toggleDropdown}>
        <GiBroadsword />
        {selectedGame}
        <TiArrowSortedDown />
      </div>
      {isOpen && (
        <div className="dropdown__content">
          {games.map((game, index) => (
            <a key={index} onClick={() => handleSelectGame(game)} href="#!">
              {game}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
