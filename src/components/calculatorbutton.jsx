const buttonStyles = {
    calculatorkey: "p-2 rounded-md m-1 text-2xl text-center w-14 hover:ring-2 transition-colors duration-500 ease-in-out w-auto y-auto",
    digitkey: "bg-ctp-surface2 ring-ctp-surface2",
    keyequals: "bg-ctp-pink ring-ctp-pink",
    keyadd: "bg-ctp-peach ring-ctp-peach",
    keysubtract: "bg-ctp-yellow ring-ctp-yellow",
    keymultiply: "bg-ctp-green ring-ctp-green",
    keydivide: "bg-ctp-blue ring-ctp-blue",
    keyclear: "bg-ctp-red ring-ctp-red",
    key0: "col-span-2 w-auto",
};

const CalculatorButton = (props) => {
    const foo = props.className.split(" ");
    let buttonStyle = "p-2 rounded-md m-1 text-2xl text-center w-14 hover:ring-2 active:ring-4 active:brightness-110";
    foo.forEach((element) => {
        buttonStyle += " " + buttonStyles[element];
    });
    buttonStyle += " " + props.className;

    return (<button
        className={` ${buttonStyles["calculatorkey"]} ${buttonStyle}`}
        onClick={props.onClick}
    >
        {props.label}
    </button>);
};

export default CalculatorButton;
