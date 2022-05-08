const crowdin = require("@crowdin/crowdin-api-client");
const fs = require("fs");

const project_id = process.env.CROWDIN_PROJECT_ID;
const token = process.env.CROWDIN_TOKEN;
const sourceFile = process.env.CROWDIN_FILE;

const { sourceFilesApi, uploadStorageApi } = new crowdin.default({
  token: token,
});

const uploadTranslateToCrowdin = async function () {
  console.log("Читаем исходные строки с переводом...");

  const sourceTranslate = fs.readFileSync("./src/i18nDev/app.ru.json");

  console.log("OK.");

  console.log("Загружаем перевод в хранилище...");

  const storage = await uploadStorageApi.addStorage(sourceFile, sourceTranslate);
  const storageId = storage.data.id;

  console.log(`OK. id: ${storageId}`);

  console.log("Ищем в списке источник для обновления...");

  const files = await sourceFilesApi.listProjectFiles(project_id);
  const fileItem = files.data.find((item) => item.data.path === "/" + sourceFile)?.data;

  if (!fileItem) {
    console.error(`Не найден файл: "${sourceFile}"`);
    return;
  }
  console.log(`
Найден файл:
  id: ${fileItem.id};
  revision: ${fileItem.revisionId};
  name: ${fileItem.name};
  title: ${fileItem.title};
`);

  console.log("Обновляем источник...");

  const updateResult = await sourceFilesApi.updateOrRestoreFile(project_id, fileItem.id, {
    storageId: storageId,
  });

  console.log("OK.");

  console.log(updateResult.data);
};

if (process.env.SINGLETON) {
  uploadTranslateToCrowdin().then();
}

module.exports = uploadTranslateToCrowdin;
