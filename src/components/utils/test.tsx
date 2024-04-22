import { render } from "@testing-library/react";
import {  PropsWithChildren } from "react";

export function renderComments(element: React.ReactElement) {
    function 
    encapsulator({children}: PropsWithChildren<{}>): JSX.Element{
        return <div>{children}</div>
    }

    return {
        ...render(element, {
            wrapper: encapsulator
        })
    }
}

