type MonsterProps = {
    name: string;
    size: string;
    monsterType: string;
    hp: string;
    armor: string;
    speed: string;
    challengeRating: string;
}

export default function MonsterCard({
    name,
    size,
    monsterType,
    hp,
    armor,
    speed,
    challengeRating,
}: MonsterProps){
    return(
        <div className="bg-amber-100 rounded-md shadow-lg flex flex-col justify-between text-center border-4 border-yellow-900">
            <h2 className="text-xl font-bold">{name}</h2>
            <p>{monsterType}</p>
            <p>
                <strong>Size: </strong> {size}
            </p>
            <p>
                <strong>HP: </strong> {hp}
            </p>
            <p>
                <strong>Armor: </strong> {armor}
            </p>
            <p>
                <strong>Speed: </strong> {speed}
            </p>
            <p>
                <strong>Challenge Rating: </strong> {challengeRating}
            </p>
        </div>
    );
}