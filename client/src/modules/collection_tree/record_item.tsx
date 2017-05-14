import React from 'react';
import HttpMethodIcon from '../../components/font_icon/http_method_icon';
import './style/index.less';

interface RecordItemProps {
    name: string;
    method?: string;
    url?: string;
    inFolder: boolean;
}

interface RecordItemState { }

class RecordItem extends React.Component<RecordItemProps, RecordItemState> {
    static defaultHeight: number = 30;

    public render() {
        let { name, method, inFolder } = this.props;
        method = method || 'GET';
        return (
            <span className="record">
                <span className={'record-icon' + (inFolder ? ' record-in-folder' : '')}>
                    <HttpMethodIcon httpMethod={method.toUpperCase()} />
                </span>
                <span>
                    {name}
                </span>
            </span>
        );
    }
}

export default RecordItem;