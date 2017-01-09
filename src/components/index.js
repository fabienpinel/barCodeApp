import React from 'react';
import { Button, Modal, Col } from 'react-materialize';


/**
 * Index page
 */
let Index = React.createClass({

    print: function(){
        var divToPrint=document.getElementById('toPrint');

        var newWin=window.open('','Print-Window');

        newWin.document.open();

        newWin.document.write('<html><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

        newWin.document.close();

        setTimeout(function(){newWin.close();},10);
    },
    getInitialState: function(){
        return {
           contactInformation:{}
        }
    },
    render() {
            return(
                <section id="index">
                    <p id="toPrint">COUCOU</p>

                    <Button waves='light' onClick={this.print}>button</Button>

                </section>

            );
    }
});

export default Index;