import React from 'react';
import { connect } from 'react-redux';
import { getAuthors } from '../sagas/authorSaga';
import Page from '../components/Page/Page';

class AuthorPage extends React.Component {
    componentDidMount() {
        this.props.getAuthors();
    }

    render() {
        const { authors } = this.props;

        return (
            <Page>
                <div className="ui three column grid">
                    <div className="row">
                        {
                            authors && authors.length !== 0 &&
                                authors.map(data => (
                                    <div key = {`author-${data.id}`} className="column">
                                        <div className="ui card">
                                            <div className="image">
                                                {
                                                    data.avatar && 
                                                    <img src={data.avatar} alt={`picture-${data.id}`} />
                                                }
                                            </div>
                                            <div className="content">
                                                <p className="header">{data.name}</p>
                                                <div className="meta">
                                                    <span className="date">Joined in 2013</span>
                                                </div>
                                                <div className="description">
                                                    {data.email}
                                                </div>
                                            </div>
                                            <div className="extra content">
                                                <a>
                                                    <i className="user icon"></i>
                                                    22 Friends
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </Page>
        )
    }
}

const mapStateToProps = store => ({
    authors: store.authorReducer.authors || []
})

const mapDispatchToProps = {
    getAuthors
}

export default connect(mapStateToProps, mapDispatchToProps) (AuthorPage);

