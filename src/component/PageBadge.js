import React from 'react';
import { Badge, Button, ButtonGroup} from 'react-bootstrap';

function PageBadge(){
    return(
        <div>
            <Button variant="primary">Notification <Badge variant="light">9</Badge></Button>
            <Button variant="primary">Message <Badge variant="light">19</Badge></Button>
            <ButtonGroup>  
            <Button variant="light"> <img src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" alt=". . ." height="20px"></img>Andreas</Button>
            </ButtonGroup> 
        </div>
    )
}
export default PageBadge;

