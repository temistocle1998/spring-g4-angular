import { BaseClass } from "../classes/base-class";
import { RetrouveAllHttpService } from "./retrouve-all-http.service";

export abstract class BaseService<T extends BaseClass> {

  prefix = '';

  constructor(public http: RetrouveAllHttpService) { }

  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Récupére la liste de tous les enregistrements
   * @returns Promise
   */
  findAll() {
    return this.http.get(this.prefix);
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Récupére un enregistrement à partir de son id
   * @param id
   * @returns Promise
   */
  findOneById(id: number) {
    return this.http.get(this.prefix + '/' + id);
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Récupére un enregistrement à partir de son uuid
   * @param id
   * @returns Promise
   */
  findOneByUuid(uuid: string) {
    return this.http.get(this.prefix + '/' + uuid);
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Enregistt
   * @returns Promise
   * @param object
   */
  save(object: T) {
    return this.http.post(this.prefix, object);
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Met à jour un enregistrement donnée
   * @param object
   * @returns Promise
   */
  update(object: T) {
    return this.http.put(`${this.prefix}/${object.id}`, object);
  }
  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Supprime un objet donné
   * @param object
   * @returns Promise
   */
  removeObject(object: T) {
    return this.http.delete(`${this.prefix}/${object.id}`);
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Supprime un objet à partir de son id
   * @param id
   * @returns Promise
   */
  removeById(id: number) {
    return this.http.delete(`${this.prefix}/${id}`);
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Supprime un objet à partir de son id
   * @param id
   * @returns Promise
   */
  removeByUuid(uuid: string) {
    return this.http.delete(`${this.prefix}/${uuid}`);
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 23.01.22
   * @description Pagine des enregistrements avec le nombre d'élement par page et
   * la prochaine page à charger si définie
   * @param itemsPerPage
   * @param pageNumber
   * @returns Promise
   */
  paginate(itemsPerPage: number, pageNumber = null) {
    if (pageNumber) {
      return this.http.get(`${this.prefix}/paginate/${itemsPerPage}?page=${pageNumber}`);
    }
    return this.http.get(`${this.prefix}/paginate/${itemsPerPage}`);
  }

  countRecord() {
    return this.http.get('count');
  }

  addObject(id: any, data: any) {
    return this.http.put(`${this.prefix}/add/` + id, data);
  }

}
