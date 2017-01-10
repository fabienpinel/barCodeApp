import React from 'react';
import { Button, Form, Row, Col, Input, Icon } from 'react-materialize';


/**
 * Index page
 */
let Index = React.createClass({

    getInitialState: function() {
        return this.state = {sticker:
        {
            firstName:"",
            lastName:"",
            dateOfBirth:"",
            number:0
        }
        };
    },
    print: function(){
        var divToPrint=document.getElementById('toPrint');
        var newWin=window.open('','Print-Window');
        newWin.document.open();
        newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
        newWin.document.close();
        setTimeout(function(){newWin.close();},10);
    },
    handleFirstNameChange:function(event){
        let stick = this.state.sticker;
        stick.firstName = event.target.value;
        this.setState({sticker: stick});
    },
    handleLastNameChange:function(event){
        let stick = this.state.sticker;
        stick.lastName = event.target.value;
        this.setState({sticker: stick});
    },
    handleDateOfBirthChange:function(event){
        let stick = this.state.sticker;
        stick.dateOfBirth = event.target.value;
        this.setState({sticker: stick});
    },
    handleNumberChange:function(event){
        let stick = this.state.sticker;
        stick.number = event.target.value;
        this.setState({sticker: stick});
    },
    render: function() {
        var sticker = this.state.sticker;
        return(
            <section id="index">
                <section className="blue-section section-center  valign-wrapper">
                    <Col l={6} m={8} s={12}  className="white-text container ">
                        <h1>Générateur d'étiquettes</h1>
                    </Col>
                </section>

                <section>
                    <Row>
                        <Col l={4} m={6} s={10} offset="s1 m3 l4">
                            <form>
                                <Input type="text" s={12} label="First Name" value={sticker.firstName} onChange={this.handleFirstNameChange} validate><Icon>account_circle</Icon></Input>
                                <Input type="text" s={12} label="Last Name"  value={sticker.lastName} onChange={this.handleLastNameChange} validate><Icon>account_circle</Icon></Input>
                                <Input type="date" s={12} label="Pick a date" value={sticker.dateOfBirth} onChange={this.handleDateOfBirthChange} className={"datepicker"} validate><Icon>perm_contact_calendar</Icon></Input>
                                <Input type="number" s={12} label="Number of stickers to print"  value={sticker.number} onChange={this.handleNumberChange}><Icon>account_circle</Icon></Input>
                            </form>

                        </Col>
                    </Row>
                </section>

                <section id="toPrint" className="center">
                    <div id="sticker">
                        {this.state.sticker.firstName} {this.state.sticker.lastName}
                        <br/>
                        {this.state.sticker.dateOfBirth}
                    </div>
                </section>
                <Button waves='light' className={"blue"} onClick={this.print}>button</Button>

            </section>

        );
    }
});
export default Index;