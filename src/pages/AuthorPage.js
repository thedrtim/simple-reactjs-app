import React from 'react';
import { connect } from 'react-redux';
import { getAuthors } from '../sagas/authorSaga';
import Page from '../components/Page/Page';
import CardContent from '../components/CardContent/CardContent';

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
                            authors && authors.length !== 0 ?
                                authors.map(data => (
                                    <div key = {`author-${data.id}`} className="column">
                                        <CardContent data={data} />
                                    </div>
                                ))
                                :
                                <div><p>No data found!</p></div>
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

