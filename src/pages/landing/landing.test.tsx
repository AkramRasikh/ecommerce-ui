/* eslint-disable testing-library/no-node-access */
/* eslint-disable jest/no-conditional-expect */
import { fireEvent, render, screen, within } from "@testing-library/react";
import Landing from "./";
import * as apiCalls from "../../api-calls";
import mockRes from "../../mock-data";
jest.mock("../../api-calls");

const { data: mockData } = mockRes;
test("user can see shopping items", async () => {
  const getDataMock = apiCalls.getDataAPI as jest.Mock;
  await getDataMock.mockImplementation(() => mockData);
  render(<Landing />);
  await screen.findByText("Wishlist");

  mockData.forEach((item) => {
    const itemContainer = within(screen.getByTestId(`product-id-${item.id}`));
    itemContainer.getByText(item.name);
    itemContainer.getByText(item.designer);
    itemContainer.getByText(`€${item.price}`);
    const addBtn = itemContainer.getByText("ADD TO CART");

    if (item?.retail) {
      itemContainer.getByText(`Est. Retail: €${item.retail}`);
    }
    if (item?.is_new_with_tag) {
      itemContainer.getByText("NEW WITH TAG");
    }
    if (item?.size) {
      itemContainer.getByText(item?.size);
    }
    if (item?.sizes) {
      itemContainer.getByText("SELECT SIZE");
      expect(addBtn.closest("button")).toBeDisabled();
      let options = itemContainer.getAllByTestId("select-option") as any; // HTMLInputElement come back to
      expect(options[0]?.selected).toBeTruthy();
      fireEvent.change(itemContainer.getByTestId("select"), {
        target: { value: item.sizes[1].name },
      });

      expect(options[0]?.selected).toBeFalsy();
      expect(options[2]?.selected).toBeTruthy(); // decrepancy in number because of placeholder

      //
    } else {
      expect(addBtn.closest("button")).not.toBeDisabled();
    }
    const imageElement = itemContainer.getByAltText("item-pic");
    expect(imageElement).toHaveAttribute("src", item.image);
  });
});

test("user can see an error message when the API fails", async () => {
  const getDataMock = apiCalls.getDataAPI as jest.Mock;
  await getDataMock.mockImplementation(() =>
    Promise.reject("Something has gone wrong. Try again 🤕!")
  );
  render(<Landing />);
  await screen.findByText("Something has gone wrong. Try again 🤕!");
});
