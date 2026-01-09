import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Paper = styled.div`
    background-color: rgb(235 229 223);
    flex: 1;
    width:80%;
    height:80%;
`

function App() {
    return (
        <Wrapper>
            <Paper>
                Drew Jex
            </Paper>
        </Wrapper>
    )
}

export default App;
