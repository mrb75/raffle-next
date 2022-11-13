import { ethers } from 'ethers'
import { Button, Container, Col, Row, Card } from 'react-bootstrap'
const myMsg = () => {
    console.log(ethers.Wallet.createRandom())
}
export default function Test() {
    return (<Container>
        test
        <Button onClick={myMsg}>test</Button>
    </Container>)
}