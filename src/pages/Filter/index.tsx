import { Button } from "../../components/buttons/Button";
import { FormSearch } from "../../components/form/FormSearch";
import { Layout } from "../../components/layout/Layout";
import searchIcon from './../../assets/img/icons/search-white.svg'
import './Filter.scss'
export default function Filter() {
    return <>
        <Layout>
            <main>
                <div className="container">
                    <div className="container-form-filter">
                        <div className="form">
                            <FormSearch />
                        </div>
                        <div className="container-button">
                            <Button icon={<img src={searchIcon} />} category="filled" iconPosition="left"> </Button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    </>
}