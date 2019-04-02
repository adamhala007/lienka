import {Component} from "react";
import React from "react";
import Modal from "react-responsive-modal";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

class ProgramChooser extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    }



    onOpenModal = () => {

        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    lastClicked =() =>{
        this.props.lastClicked(this.state.i);
    };

    render() {
        const { open } = this.state;


        return (
            <div style={styles}>
                <div id={"controlPanel-open"} onClick={this.onOpenModal}> </div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                </Modal>
            </div>
        );
    }
}

export default ProgramChooser;