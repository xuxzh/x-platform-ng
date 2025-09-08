import { cloneDeep } from 'lodash-es';
import { XzNodeSchema, XzPageContaienr } from 'x-lcdp/model';

export class XzJsonSchemaHelper {
  /**
   * 在页面容器中替换指定节点
   * @param newNode 新的节点数据
   * @param pageContainer 页面容器
   * @returns 替换后的页面容器，如果未找到节点则返回null
   */
  static replaceSchemaNode(
    newNode: XzNodeSchema,
    pageContainer: XzPageContaienr
  ): XzPageContaienr {
    const clonePageContainer = cloneDeep(pageContainer);
    if (!pageContainer?.pages?.length) {
      return pageContainer;
    }

    // 遍历所有页面
    for (const page of clonePageContainer.pages) {
      if (this.replaceNodeInTree(page, newNode)) {
        break;
      }
    }

    return clonePageContainer;
  }

  /**
   * 在节点树中递归查找并替换节点
   * @param currentNode 当前节点
   * @param newNode 新节点
   * @returns 是否找到并替换了节点
   */
  private static replaceNodeInTree(
    currentNode: XzNodeSchema,
    newNode: XzNodeSchema
  ): boolean {
    // 如果当前节点就是要替换的节点
    if (currentNode.key === newNode.key) {
      // 保留原有的children，除非新节点明确提供了children
      if (!newNode.children && currentNode.children) {
        newNode.children = currentNode.children;
      }
      // 替换节点属性
      Object.assign(currentNode, newNode);
      return true;
    }

    // 递归查找子节点
    if (currentNode.children) {
      for (const child of currentNode.children) {
        if (this.replaceNodeInTree(child, newNode)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * 根据key查找节点
   * @param nodeKey 节点key
   * @param pageContainer 页面容器
   * @returns 找到的节点，未找到返回null
   */
  static findNodeByKey(
    nodeKey: string,
    pageContainer: XzPageContaienr
  ): XzNodeSchema | null {
    if (!pageContainer?.pages?.length) {
      return null;
    }

    for (const page of pageContainer.pages) {
      const found = this.findNodeInTree(page, nodeKey);
      if (found) {
        return found;
      }
    }

    return null;
  }

  /**
   * 在节点树中递归查找节点
   * @param currentNode 当前节点
   * @param nodeKey 要查找的节点key
   * @returns 找到的节点或null
   */
  private static findNodeInTree(
    currentNode: XzNodeSchema,
    nodeKey: string
  ): XzNodeSchema | null {
    if (currentNode.key === nodeKey) {
      return currentNode;
    }

    if (currentNode.children) {
      for (const child of currentNode.children) {
        const found = this.findNodeInTree(child, nodeKey);
        if (found) {
          return found;
        }
      }
    }

    return null;
  }
}
