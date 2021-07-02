import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

const JobAdvertisementFavoriteButton = (props) => {
    return (
        <div>
            <Button as='div' {...props} disabled={false} className="favorite-button" labelPosition='right'>
                <Button disabled={false} color='red'>
                    <Icon name='heart' />
                    Add Favorite
                </Button>

            </Button>

        </div>
    );
}

export default JobAdvertisementFavoriteButton;

