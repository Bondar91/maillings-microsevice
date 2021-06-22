import { IListAttributes } from 'models/list/list.d';
import { List } from 'models';
import { listSchema } from 'utils/validates/index';

class listController {
  getAllAction() {
    return List.getLists();
  }

  findOneAction(listId: string) {
    return List.findList(listId);
  }

  async addAction(list: IListAttributes) {
    const validatedList = await listSchema.validateAsync(list);

    return List.addList(validatedList);
  }

  async updateAction(listId: string, listUpdate: IListAttributes) {
    const validatedList = await listSchema.validateAsync(listUpdate);

    return List.updateList(listId, validatedList);
  }

  deleteAction(listId: string) {
    return List.deleteList(listId);
  }
}

const controller = new listController();

export default controller;
