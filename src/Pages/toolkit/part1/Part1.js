import { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import RadioOption from "../components/RadioOption";
import RadioWrapper from "../components/RadioWrapper";
import { part_1_2, part_1_3, part_1_2_func, part_1_3_func } from "./part1_data";

export default function Part1() {
    const [q_1_2_1, setq_1_2_1] = useState(0)
    const [q_1_2_2, setq_1_2_2] = useState(0)
    const [q_1_3, setq_1_3] = useState(0)

    let q_1_2_3 = 0

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    const onChangeValue = (event) => {
        const name = event.target.name
        const value = event.target.value

        console.log(name)
        console.log(value)

        if (name === "1.2.1") {
            setq_1_2_1(value)
            console.log("here 1")
        }

        if (name === "1.2.2") {
            setq_1_2_2(value)
            console.log("here2")
        }

        if (name === "1.3") {
            setq_1_3(value)
        }
    }

    const part_1_2_result = () => {
        if (q_1_2_1 != 0 && q_1_2_2 != 0) {
            q_1_2_3 = part_1_2_func(q_1_2_1, q_1_2_2).number
            return (
                <p>{part_1_2_func(q_1_2_1, q_1_2_2).name}</p>
            )
        }
    }

    const part_1_3_result = () => {
        if (q_1_2_3 != 0 && q_1_3 != 0) {
            return (
                <p>{part_1_3_func(q_1_2_3, q_1_3).name}</p>
            )
        }
    }

    return (
        <>
            <FormWrapper handleSubmit={handleSubmit} title="Test Title" description="test description">
                {part_1_2.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <RadioOption key={option.name} name={option.name} id={question.step} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}
                {part_1_2_result()}

                {part_1_3.map((question) => (
                    <RadioWrapper key={question.step} name={question.name} description={question.description} onChangeValue={onChangeValue}>
                        {question.options.map((option) => (
                            <RadioOption key={option.name} name={option.name} id={question.step} value={option.number} />
                        ))}
                    </RadioWrapper>
                ))}
                {part_1_3_result()}

            </FormWrapper>
        </>
    );
}
