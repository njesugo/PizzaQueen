import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const Filter = () => {
    return (
        <div className="flex justify-between p-2 pt-10 mt-8">
            <div className="flex gap-5">
                <Button
                    type="primary"
                    className="custom-button-dark-filter"
                >
                    Tous
                </Button>
                <Button
                    type="primary"
                    className="custom-button-light-filter"
                >
                    En cours
                </Button>
                <Button
                    type="primary"
                    className="custom-button-light-filter"
                >
                    Terminés
                </Button>
            </div>

            <div>
                <Input 
                   size="large" 
                   placeholder="Rechercher" 
                   style={{ padding:'10px' }}
                   prefix={<SearchOutlined style={{ color: "#646464" }}/>}
                />
            </div>
        </div>
    );
}