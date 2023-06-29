import prisma from "../database";

export const getUpdates = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        updates: true,
      },
    });

    // Update database to remove this later
    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.updates];
    }, []);

    res.json({ data: updates });
  } catch (e) {
    next(e);
  }
};

export const getOneUpdate = async (req, res, next) => {
  try {
    const update = await prisma.update.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.json({ data: update });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

export const createUpdate = async (req, res, next) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: req.body.productId,
      },
    });

    if (!product) {
      return res.json({ message: "Product does not exist" });
    }

    const update = await prisma.update.create({
      data: {
        title: req.body.title,
        body: req.body.body,
        product: { connect: { id: product.id } },
      },
    });

    res.json({ data: update });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

export const updateUpdate = async (req, res, next) => {
  try {
    // Update prisma schema to handle this better
    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        updates: true,
      },
    });

    // Update database to remove this later
    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.updates];
    }, []);

    const match = updates.find((update) => update.id === req.params.id);

    if (!match) {
      return res.json({ message: "Id does not match" });
    }

    const updatedUpdate = await prisma.update.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });

    res.json({ data: updatedUpdate });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

export const deleteUpdate = async (req, res, next) => {
  try {
    // Update prisma schema to handle this better
    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        updates: true,
      },
    });

    // Update database to remove this later
    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.updates];
    }, []);

    const match = updates.find((update) => update.id === req.params.id);

    if (!match) {
      return res.json({ message: "Id does not match" });
    }

    const deleted = await prisma.update.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({ data: deleted });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};
