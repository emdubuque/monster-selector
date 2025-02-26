"use client";

import MonsterCard from "@/app/components/MonsterCard";
import {useState, useEffect} from "react";

type Monster = {
    Name: string;
    Size: string;
    'Race + alignment': string;
    HP: string;
    Armor: string;
    Speed: string;
    'Challenge rating  (XP)': string;
}


export default function MonsterList() {
    const [monsterData, setMonsterData] = useState<Monster[]>([]);

    useEffect(() => {
        const fetchMonsters = async () => {
            try {
                const response = await fetch('/api/monsters');
                if(!response.ok) {
                    throw new Error('Failed to fetch monsters');
                }
                const data = await response.json();
                setMonsterData(data);
            } catch (error) {
                console.log("error fetching monsters: ", error)
            }
        };

        fetchMonsters();
    }, [])

    return(
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {monsterData.length > 0 ? (
                    monsterData.map((monster) => (
                        <MonsterCard
                            key={monster.Name}
                            name={monster.Name}
                            size={monster.Size}
                            monsterType={monster['Race + alignment']}
                            hp={monster.HP}
                            armor={monster.Armor}
                            speed={monster.Speed}
                            challengeRating={monster['Challenge rating  (XP)']}
                        />
                    ))
                ) : (
                    <p> no monsters available</p>
                )}
            </div>
        </div>

    );
}