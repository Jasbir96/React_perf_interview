import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe("counter test cases", () => {
    test("snapshot for counter", () => {
        const { asFragment } = render(<Counter></Counter>);
        expect(asFragment()).toMatchSnapshot();
    })
    test("inital state check", () => {
        //1. render
        render(<Counter></Counter>)
        // select
        const countText = screen.getByText("Counter");
        const CountValue = screen.getByText("0");
        const plusText = screen.getByText("+");
        const minusText = screen.getByText("-");

        // 3. compare
        expect(countText).toBeInTheDocument();
        expect(CountValue).toBeInTheDocument();
        expect(plusText).toBeInTheDocument();
        expect(minusText).toBeInTheDocument();
    })

    test("inc by 1", () => {
        // 1. it is in the UI 
        render(<Counter></Counter>)
        const plusText = screen.getByText("+");
        fireEvent.click(plusText);
        const isOnePresent = screen.getByText("1");
        expect(isOnePresent).toBeInTheDocument();
    })
    test("dec by 1", () => {

        render(<Counter></Counter>);

        const minusText = screen.getByText("-");

        fireEvent.click(minusText);
        fireEvent.click(minusText);

        const isOnePresent = screen.getByText("-2");
        expect(isOnePresent).toBeInTheDocument();
    })
})
