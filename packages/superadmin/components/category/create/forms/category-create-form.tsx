import { Field } from 'formik';
import Accordion from '@/components/global/accordion';
import CustomInput from './text-input-field';
import { NestedCategoryList } from 'models';

interface Props {
  categoryList: NestedCategoryList[];
}

const CategoryCreateForm: React.FC<Props> = ({ categoryList }: Props) => {
  return (
    <>
      <Accordion id={1} title="Category info" show={true} icon="bi bi-info-lg">
        <CustomInput label="Name" id="name" required={true} />
        <CustomInput label="Description" id="description" />

        <div className="form-group row my-2">
          <div className="col-md-3">
            <div className="label-wrapper row row-cols-auto float-md-end">
              <label className="col-form-label col px-1" htmlFor="parentSlug">
                Parent category
              </label>
            </div>
          </div>
          <div className="col-md-9">
            <div className="input-group ">
              <Field
                name="parentSlug"
                as="select"
                className="ms-2 form-select"
                placeholder="Select parent category"
              >
                <option defaultValue={''}>Choose parent category</option>
                {categoryList.map((category) => (
                  <option key={category.id} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </Field>
            </div>
          </div>
        </div>

        <CustomInput label="Photo URL" id="photo.url" />
        <CustomInput label="Photo Alt" id="photo.alt" />
      </Accordion>
      <Accordion id={2} title="Display" show={true} icon="bi bi-display">
        <CustomInput label="Published" id="published" type="checkbox" />
        <CustomInput
          label="Show on home page"
          id="showOnHomePage"
          type="checkbox"
        />
        <CustomInput
          label="Include in top menu"
          id="includeInTopMenu"
          type="checkbox"
        />
        <CustomInput
          label="Allow to customers select page size"
          id="allowToSelectPageSize"
          type="checkbox"
        />
        <CustomInput label="Display order" id="displayOrder" type="number" />
      </Accordion>

      <Accordion id={3} title="SEO" show={true} icon="bi bi-search-heart">
        <CustomInput label="Search engine friendly page name" id="meta.SEFN" />
        <CustomInput label="Meta title" id="meta.title" />
        <CustomInput label="Meta keywords" id="meta.keywords" />
        <CustomInput label="Meta description" id="meta.description" />
      </Accordion>
    </>
  );
};

export default CategoryCreateForm;
