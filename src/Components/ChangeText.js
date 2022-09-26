import React,{useState, createContext} from "react";

export const TextChanger = createContext()
function ChangeText({children}) {
    function randomNumber() {
        return Math.floor(Math.random() * 6);
      }
    const [index, setIndex]  = useState(0)
    setTimeout(() => {
        setIndex(randomNumber())
    }, 3000)

    return (
        <TextChanger.Provider value={index}>
            {children}
        </TextChanger.Provider>
    )
}
// export default React.memo(TextChanger)
export default ChangeText
