class BaseRepository {
  constructor(model, transaction) {
    this.model = model;
    this.transaction = transaction;
  }

  find(filter) {
    return this.model.findAll({
      ...filter,
      transaction: this.transaction,
      raw: true,
    });
  }

  create(entitie) {
    return this.model.create(
      { ...entitie },
      {
        transaction: this.transaction,
        raw: true,
      }
    );
  }

  bulkCreate(images) {
    return this.model.bulkCreate(images, {
      transaction: this.transaction,
      raw: true,
    });
  }

  update(id, entitie) {
    return this.model.update(entitie, {
      where: { id },
      transaction: this.transaction,
      raw: true,
    });
  }

  delete(id) {
    return this.model.destroy({ where: id });
  }
}

module.exports = BaseRepository;
