import { Http } from 'angular2/http';
import { TreeNode } from '../../../components/api/treenode';
export declare class NodeService {
    private http;
    constructor(http: Http);
    getFiles(): Promise<TreeNode[]>;
    getLazyFiles(): Promise<TreeNode[]>;
    getFilesystem(): Promise<TreeNode[]>;
    getLazyFilesystem(): Promise<TreeNode[]>;
}
