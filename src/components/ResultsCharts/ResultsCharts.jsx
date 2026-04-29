import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  { "id": 1, "name": "Arif Rahman", "math": 85, "physics": 78, "chemistry": 82 },
  { "id": 2, "name": "Sakib Hasan", "math": 92, "physics": 88, "chemistry": 90 },
  { "id": 3, "name": "Nusrat Jahan", "math": 67, "physics": 72, "chemistry": 70 },
  { "id": 4, "name": "Tanvir Ahmed", "math": 74, "physics": 69, "chemistry": 75 },
  { "id": 5, "name": "Mehedi Hasan", "math": 88, "physics": 91, "chemistry": 86 },
  { "id": 6, "name": "Farhana Akter", "math": 59, "physics": 65, "chemistry": 60 },
  { "id": 7, "name": "Imran Hossain", "math": 95, "physics": 93, "chemistry": 97 },
  { "id": 8, "name": "Sadia Islam", "math": 72, "physics": 76, "chemistry": 74 },
  { "id": 9, "name": "Rakibul Karim", "math": 81, "physics": 84, "chemistry": 80 },
  { "id": 10, "name": "Jannat Sultana", "math": 66, "physics": 70, "chemistry": 68 }
]

const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={500} height={600} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke="blue"></Line>
                <Line dataKey="physics" stroke="red"></Line>
            </LineChart>
        </div>
    );
};

export default ResultsCharts;