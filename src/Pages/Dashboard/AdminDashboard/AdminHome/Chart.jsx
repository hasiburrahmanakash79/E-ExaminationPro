import { Chart } from "react-google-charts";
import "./Chart.css"

export const data = [
    ["Task", "Hours per Day"],
    ["All Users", 40],
    ["Active User", 29],
    ["Institute", 11],
    ["Instructors", 13],
    ["Q. Category", 8],
];

export const options = {
    title: "Total Information",
    is3D: true,
};


export const ques = [
    ["Questions", "MCQ", "Long", "Short"],
    ["Aug", 180, 100, 120],
    ["Sep", 220, 140, 180],
    ["Oct", 295, 148, 189],
];

export const queOptions = {
    chart: {
        title: "E-ExamPro Questions",
        // subtitle: "The website in the All Questions information",
    },
};

const Charts = () => {
    return (
        <div>

            <div className="grid gap-4 md:grid-cols-5">
                <div className="md:col-span-3 rounded-xl">
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={ques}
                        options={queOptions}
                    // className="px-2"
                    />
                </div>
                <div className="md:col-span-2">
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                    />
                </div>
            </div>
            {/* <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            /> */}

        </div>
    );
};

export default Charts;