import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

const RepoItem = ({repo}) => {
    const {name,open_issues,description,forks,html_url} = repo;
        return (
            <div className="card grid-3">
                <div className="all-center">
                    <a href={html_url}>{name}</a>
                </div>
                <div>
                    <div className="badge badge-primary">Open Issues: {open_issues}</div>
                    <div className="badge badge-success">Fork: {forks}</div>
                </div>
                <div>
                    {description && <Fragment>
                        <h5>Description</h5>
                        <p>{description}</p>
                    </Fragment>}
                </div>
            </div>
        );
};

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default RepoItem;