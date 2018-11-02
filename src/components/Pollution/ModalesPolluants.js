import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';


class ModalesPolluants extends React.Component {
  state = {
    openNO2: false,
    openPM: false,
    openO3: false,
    openSO2: false,
    openCO: false,
    openCOV: false,

  };

  handleClickOpenNO2 = () => {
    this.setState({ openNO2: true });
  };
  handleClickOpenPM = () => {
    this.setState({ openPM: true });
  };
  handleClickOpenO3 = () => {
    this.setState({ openO3: true });
  };
  handleClose = () => {
    this.setState({ 
        openNO2: false, 
        openPM: false,
        openO3: false,
        openSO2: false,
        openCO: false,
        openCOV: false,
    });
  }; 

  render() {
  
    const { fullScreen } = this.props;    

    return (
    <div className="buttons-polluants">

      <div>
        <Button onClick={this.handleClickOpenNO2} color="primary" variant="contained" className="no2">
            NO2
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.openNO2}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title">
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Quitter
                </Button>
            </DialogActions>
            <DialogTitle id="responsive-dialog-title">{"NO2"}</DialogTitle>          
            <DialogContent>
                <DialogContentText>
                Les émissions d'oxydes d'azote (monoxyde d'azote plus dioxyde d'azote) apparaissent dans toutes les combustions, à haute température, de combustibles fossiles (charbon, fuel, pétrole...). Le monoxyde d'azote (NO) n'est pas toxique pour l'homme aux concentrations auxquelles on le rencontre dans l'environnement mais le dioxyde d'azote (NO2) est un gaz irritant pour les bronches.
                Le secteur du trafic routier est responsable de plus de la moitié des émissions de NOx et le chauffage de près de 20%. 
                Le dioxyde d'azote provient quant à lui de l'oxydation du monoxyde d'azote rejeté dans l'atmosphère par l'ozone. Mais une partie du dioxyde d'azote est également émise telle quelle dans l'atmosphère.
                </DialogContentText>
            </DialogContent>
        </Dialog>
      </div>

      <div>
        <Button onClick={this.handleClickOpenPM} color="primary" variant="contained" className="no2">
            PM
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.openPM}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title">
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Quitter
                </Button>
            </DialogActions>
            <DialogTitle id="responsive-dialog-title">{"PM (Particules en suspension)"}</DialogTitle>          
            <DialogContent>
                <DialogContentText>
                Les microparticules, de la taille du micromètre (µm, un million de fois plus petit qu'un mètre) ne sont pas visibles à l'œil nu. Ce sont celles qui sont mesurées dans l'air à travers : 
                <br/>- Les particules PM10, de taille inférieure à 10 µm (6 à 8 fois plus petites que l'épaisseur d'un cheveu ou de la taille d'une cellule) et qui pénètrent dans l'appareil respiratoire. 
                <br/>- Les particules fines ou PM2,5, inférieures ou égales à 2,5 µm (comme les bactéries) et qui peuvent se loger dans les ramifications les plus profondes des voies respiratoires (alvéoles). 
                <br/>Ces particules ont des effets sur la santé, principalement au niveau cardiovasculaire et respiratoire. Elles ont trois origines :
           
                    <li>Les rejets directs dans l'atmosphère. En Île-de-France, l'industrie rejette un tiers des particules PM10 émises dans la région, toutes activités confondues.Les activités domestiques, entreprises, commerces, artisanat, en particulier le chauffage (dont le chauffage au bois) produisent un quart des PM10 rejetées dans l'air francilien. Idem pour le trafic routier.</li>
                    <li>Les remises en suspension des particules qui s'étaient déposées au sol sous l'action du vent ou par les véhicules le long des rues.</li>                   
                    <li>La transformation chimique de gaz. Par exemple, dans certaines conditions, le dioxyde d'azote pourra se transformer en particules de nitrates et le dioxyde de soufre en sulfates.</li>
             
                <br/>Ces deux dernières sources donnent lieu à des transports de particules à travers l'Europe, comme pour l'ozone. Ce sont à la fois les plus difficiles à quantifier et celles sur lesquelles il est le plus compliqué d'agir pour faire baisser les niveaux de particules dans l'air. 
                </DialogContentText>
            </DialogContent>
        </Dialog>
      </div>

      <div>
        <Button onClick={this.handleClickOpenO3} color="primary" variant="contained" className="no2">
            O3
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.openO3}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title">
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Quitter
                </Button>
            </DialogActions>
            <DialogTitle id="responsive-dialog-title">{"O3 (Ozone)"}</DialogTitle>          
            <DialogContent>
                <DialogContentText>
                    A très haute altitude, dans la haute atmosphère, l'ozone protège les organismes vivants en absorbant une partie des rayons UV. Mais à basse altitude, là où nous vivons et respirons, c'est un polluant qui irrite les yeux et l'appareil respiratoire, et qui a des effets sur la végétation.
                    <br/>L'ozone est un polluant, qui pose problème essentiellement en été, car pour produire beaucoup d'ozone la chaleur et un ensoleillement suffisant sont nécessaires. En effet, ce polluant n'est pas directement émis dans l'atmosphère mais se forme par réaction chimique à partir d'autres polluants, en particulier les oxydes d'azote et des hydrocarbures, sous l'action des rayons UV du soleil.
                    C'est aussi un polluant qui voyage et qui peut traverser toute l'Europe.
                </DialogContentText>
            </DialogContent>
        </Dialog>
      </div>

    </div>
    );
  }
}



export default withMobileDialog({breakpoint: 'xs'})(ModalesPolluants);