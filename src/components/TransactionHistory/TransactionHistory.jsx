import clsx from "clsx";
import css from "./TransactionHistory.module.css";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { PiHandWithdraw } from "react-icons/pi";
import { PiHandDeposit } from "react-icons/pi";

const getTypeIcon = (type) => {
  switch (type) {
    case "invoice":
      return <FaFileInvoiceDollar />;
    case "payment":
      return <MdOutlinePayment />;
    case "withdrawal":
      return <PiHandWithdraw />;
    case "deposit":
      return <PiHandDeposit />;
    default:
      return "";
  }
};

function TransactionHistory({ items }) {
  return (
    <table className={clsx(css["table"])}>
      <thead className={clsx(css["table-head"])}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <>
                  {getTypeIcon(item.type)} {item.type}
                </>
              </td>
              <td>
                {}
                {item.amount}
              </td>
              <td>
                {}
                {item.currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default TransactionHistory;
