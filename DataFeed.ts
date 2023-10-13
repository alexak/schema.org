
import { Dataset } from './Dataset';
import { CreativeWork } from './CreativeWork';
import { Thing } from './Thing';
import { DataFeedItem } from './DataFeedItem';

export interface DataFeed extends Dataset, CreativeWork, Thing {
    dataFeedElement?: DataFeedItem | string | Thing;
}
