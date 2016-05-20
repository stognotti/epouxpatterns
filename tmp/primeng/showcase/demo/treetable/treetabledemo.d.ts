import { OnInit } from 'angular2/core';
import { TreeNode } from '../../../components/api/treenode';
import { NodeService } from '../service/nodeservice';
import { Message } from '../../../components/api/message';
export declare class TreeTableDemo implements OnInit {
    private nodeService;
    msgs: Message[];
    files: TreeNode[];
    lazyFiles: TreeNode[];
    selectedFile: TreeNode;
    selectedFiles: TreeNode[];
    constructor(nodeService: NodeService);
    ngOnInit(): void;
    nodeSelect(event: any): void;
    nodeUnselect(event: any): void;
    nodeExpand(event: any): void;
}
